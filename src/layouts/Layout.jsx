import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Resumen } from '../components/Resumen';
import { useQuiosco } from '../hooks/useQuiosco';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const Layout = () => {

  const {modal, hanndleModal} = useQuiosco();
  console.log(modal);



  return (
    <>
      <div className='md:flex'>
        <Sidebar/>
        
        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
          <Outlet/> 
        </main>

        <Resumen/>
      </div>
      {
        modal && (
          <Modal isOpen={modal} style={customStyles}>
            <p>Desde Modal</p>
            <button type='button'
              onClick={hanndleModal}
            >
              Cerrar
            </button>
          </Modal>
        )
      }
      
    </>
  )
}
