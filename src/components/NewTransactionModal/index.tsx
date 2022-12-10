import './styles'
import closeImg from '../../assets/iconfechar.svg'
import incomeImg from '../../assets/icon1.svg'
import outcomeImg from '../../assets/icon2.svg'

import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { useState, FormEvent } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      title,
      value,
      category,
      type,
    }

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-closer'>
        
        <img src={closeImg} alt="fecharModal"/>
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder='Titulo'
          value={title}
          onChange={e =>setTitle(e.target.value) }
        />

        <input
          type="number"
          placeholder='Valor'
          value={value}
          onChange={e => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="saida" />
            <span>Saída</span>
          </RadioBox>
        
        </TransactionTypeContainer>
        

        <input
          placeholder='Categoria'
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>

      </Container>      
    </Modal>
  )
}