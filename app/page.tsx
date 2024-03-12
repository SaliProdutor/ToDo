'use client'

// Arquivos 
import Logo from '@/public/assets/logo.svg';
import Plus from '@/public/assets/plus.svg';
import Clipboard from '@/public/assets/clipboard.svg';

// Extensions
import Image from 'next/image';
import { useState } from 'react';
import { CardTask } from './components/card-task';
export default function Home() {

  const [inputValue, setInputValue] = useState('');

  interface TasksProps {
    id: string | number,
    check: boolean,
    task: string,
  }
  
  const [tasks, setTasks] = useState<TasksProps[]>([
    {
      id: '01',
      check: true,
      task: 'Ir no mercado'
    },
    {
      id: '02',
      check: true,
      task: 'Ir no mercado'
    },
    {
      id: '03',
      check: false,
      task: 'Ir no mercado'
    },
  ])

  function handleDeleteTask(id: string | number): void {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  function handSwitchTask(id: string | number): void  {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, check: !task.check } : task
      )
    );
  }

  function handleAddTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    if (inputValue.trim() === '') {
      alert('Por favor, insira uma tarefa válida');
      return;
    }

    const newId = tasks.length > 0 ? parseInt(tasks[tasks.length - 1].id.toString()) + 1 : 1;

    setTasks(prevTasks => [
      ...prevTasks,
      {
        id: newId,
        check: false,
        task: inputValue
      }
    ]);

    setInputValue('');
    
  }
  return (
    <main className=" bg-background h-screen overflow-x-hidden">
      <div className=" h-[12.5rem] bg-gray-700 flex justify-center items-center">
        <Image className=' w-[7.875rem]' src={Logo} alt='Logo ToDo'/>
      </div>
      <div className=' flex flex-1 mt-[-1.5rem] justify-center'>
        <div className=' flex max-w-[50rem] flex-1 max-h-[4rem]'>
          <form onSubmit={handleAddTask} className=' flex gap-[.5rem] flex-1 justify-center'>
            <input 
              placeholder='Adicione uma nova tarefa' 
              className='
                bg-gray-500 
                border-gray-700 
                border-[1px] 
                py-[1rem] 
                px-[1rem]
                text-gray-300
                placeholder:text-gray-300
                font-regular
                outline-none
                rounded-[8px]
                flex-1
              '
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type='submit' className='bg-blue-dark flex justify-center items-center px-[1rem] gap-[.5rem] rounded-[8px] cursor-pointer' >
              <a className=' text-gray-100 font-bold text-[.875rem]'>Criar</a>
              <Image src={Plus} className='w-[1rem]' alt=''/>
            </button>
          </form>
        </div>
      </div>
      <div className='flex justify-center pt-[4rem]'>
        <div className=' flex max-w-[50rem] flex-col flex-1'>
          <header className='flex flex-1 justify-between min-h-[2.68rem] items-start'>
            <div className='flex gap-[.5rem]'>
              <p className=' text-blue font-bold text-[0,75rem]'>Tarefas criadas</p>
              <div className=' bg-gray-400 text-gray-200 rounded-full py-[0.2rem] px-[0.8rem] font-bold text-[0.75rem]'>{tasks.length}</div>
            </div>
            <div className='flex gap-[.5rem]'>
              <p className=' text-purple font-bold text-[0,75rem]'>Concluídas</p>
              <div className=' bg-gray-400 text-gray-200 rounded-full py-[0.2rem] px-[0.8rem] font-bold text-[0.75rem]'>{`${tasks.filter( i => i.check === true).length } de ${tasks.length}`}</div>
            </div>
          </header>
          {tasks ? 
            <div className=''>
              {tasks.map(items => {
                return(
                  <CardTask key={items.id} task={items.task} check={items.check} id={items.id} onDelete={handleDeleteTask} onSwitch={handSwitchTask}/>
                )
              })}
            </div>
            
            :

            <div className=' flex flex-col w-full justify-center items-center py-[4rem] border-t-[1px] border-[#333333] gap-[1rem]'>
              <Image className=' w-[3.5rem]' src={Clipboard} alt='Nem uma tarefa' />
              <div className='flex flex-col items-center'>
                <div className=' font-bold text-gray-300 text-[1rem]'>Você ainda não tem tarefas cadastradas</div>
                <div className=' font-regular text-gray-300 text-[1rem]'>Crie tarefas e organize seus itens a fazer</div>
              </div>
            </div>
          }
        </div>
      </div>
    </main>
  );
}
