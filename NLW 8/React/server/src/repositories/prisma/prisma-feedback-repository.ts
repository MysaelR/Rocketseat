import { prisma } from '../../prisma';
import { FeedbacksRepository, FeedbackCreateData } from '../feedbacks-repository';


export class PrismaFeedbacksRepository implements FeedbacksRepository{
    async create({type, comment, screenshot}: FeedbackCreateData){
        await prisma.feedback.create({
            //data = Quais os dados para criação desse novo feedback.
            //select? = Quais dados eu quero retornar pós-criação.
            data: {
                /* type: type,
                comment: comment,
                screenshot: screenshot  OU */
                type,
                comment,
                screenshot
            }
        })
    
    }
}