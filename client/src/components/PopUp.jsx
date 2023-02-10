import React, { useContext } from 'react'
import Modal from 'react-modal'

import ZipCodeInput from './ZipCodeInput'
import CategoryInputs from './CategoryInputs'
import Button from './Button'
import { Context } from '../contexts/Context'
import Spinner from './Spinner'
import Form from './Form'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '999',
        filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
        padding: '2rem',
        borderRadius: '1rem',
    },
}

const PopUp = ({
    getBusinessesHandler,
    closeModal,
    modalIsOpen,
}) => {
    const ctx = useContext(Context)

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            shouldCloseOnOverlayClick={false}
            contentLabel="Zipcode Modal"
        >
            <Form onSubmit={getBusinessesHandler}>
                <h1 className="pb-8 text-center text-4xl font-semibold text-black">
                    Welcome to GoPup!
                </h1>
                <div className="mx-4">
                    <ZipCodeInput />
                    <div className="mx-4">
                        <h2 className="py-5 font-semibold text-black">
                            What are you looking for?
                        </h2>
                        <CategoryInputs variant="popup" />
                    </div>
                    {ctx.isLoading && <Spinner />}
                    {!ctx.isLoading && (
                        <Button variant="popup">
                            <span>Search</span>
                        </Button>
                    )}
                </div>
            </Form>
        </Modal>
    )
}

export default PopUp
