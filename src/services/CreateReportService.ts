import {getRepository} from 'typeorm'

import Report from '../models/Report';

interface Request {
  email: string;
  description: string;
  reason: string;
  userReported: string;
}

class CreateReportService {
  public async execute({email, description, reason, userReported}: Request): Promise<Report> {
    const reportsRepository = getRepository(Report)

    const report = reportsRepository.create({
      email,
      description,
      reason,
      userReported,
    });

    await reportsRepository.save(report);

    return report;
  }
}

export default CreateReportService;
