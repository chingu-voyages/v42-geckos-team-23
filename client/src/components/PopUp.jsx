import React, { useContext } from 'react'
import Modal from 'react-modal'

import ZipCodeInput from './ZipCodeInput'
import CategoryInputs from './CategoryInputs'
import Button from './Button'
import { Context } from '../contexts/Context'
import Form from './Form'

import DogLoader from './DogLoader'

const customStyles = {}

const dogLoader = {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999',
    filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
    padding: '1.5rem',
    borderRadius: '1rem',
    background: 'transparent',
    border: 'hidden',
}

const content = {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999',
    filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
    padding: '1.5rem',
    borderRadius: '1rem',
}

const PopUp = ({
    getBusinessesHandler,
    closeModal,
    modalIsOpen,
    zipCode,
    setZipCode,
}) => {
    const ctx = useContext(Context)
    const { isDataLoading } = ctx

    if (isDataLoading) {
        customStyles.content = dogLoader
    } else {
        customStyles.content = content
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Zipcode modal"
        >
            {isDataLoading ? (
                <DogLoader />
            ) : (
                <Form onSubmit={getBusinessesHandler}>
                    <h1 className="pb-8 text-center text-4xl font-semibold text-black">
                        Welcome to GoPup!
                    </h1>
                    <div className="mx-4">
                        <ZipCodeInput
                            zipCode={zipCode}
                            setZipCode={setZipCode}
                        />
                        <div className="mx-4">
                            <h2 className="py-5 font-semibold text-black">
                                What are you looking for?
                            </h2>
                            <CategoryInputs variant="popup" />
                        </div>

                        <Button variant="popup">
                            <span>Search</span>
                        </Button>
                    </div>
                </Form>
            )}
        </Modal>
    )
}

export default PopUp
