import { useState } from "react/cjs/react.development";

export const useForm = ( initialSate = {} ) => {

    const [ inputValue, setInputValue ] = useState( initialSate );

    const handleInputChange = ( { target } ) => {

        setInputValue({

            ...inputValue,
            [ target.name ] : target.value

        });

    };

    return [ inputValue, handleInputChange ];

};