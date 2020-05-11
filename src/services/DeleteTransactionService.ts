import { getCustomRepository } from 'typeorm';
import TransactionRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const transaction = transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Unable to delete: User not found.');
    }

    await transactionRepository.delete(id);
  }
}

export default DeleteTransactionService;
