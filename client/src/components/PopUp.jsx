import React from 'react'
import ZipCodeInput from './ZipCodeInput'
import CategoryInputs from './CategoryInputs'
import Button from './Button'

const PopUp = () => {
    return (
        <div class="bg-white mx-auto w-[500px] rounded-lg drop-shadow-md p-8">
            <div>
                <h1 className="text-black font-mono font-semibold text-4xl pb-8 text-center">
                    Welcome to GoPup!
                </h1>
                <div className="mx-20">
                    <ZipCodeInput />

                    <div className="mx-4">
                        <h2 className="text-black font-mono font-semibold py-5">
                            What are you looking for?
                        </h2>

                        <CategoryInputs variant="popup" />
                    </div>
                    <Button variant="popup">
                        <span>Search</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PopUp
