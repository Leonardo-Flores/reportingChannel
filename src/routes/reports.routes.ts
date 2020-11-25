import {Router} from 'express';
import { getRepository } from 'typeorm';
import Report from '../models/Report';
import CreateReportService from '../services/CreateReportService';

const reportsRouter = Router();

reportsRouter.get('/list', async (request, response) => {
  const reportsRepository = getRepository(Report)
  const reports = await reportsRepository.find();

  reports.forEach((report) =>{
    delete report.email
  })

  return response.status(200).json(reports);
})

reportsRouter.post('/create', async (request, response) => {
  const {email, description, reason, userReported} = request.body;

  const createReport = new CreateReportService();

  const report = await createReport.execute({
    email,
    description,
    reason,
    userReported
  })

  delete report.email

  return response.json(report);

})

export default reportsRouter;
