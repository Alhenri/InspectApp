// Arquivo que fará a captura dos dados
import React, { createContext, useState, ReactNode } from 'react'

interface Idata{
    dado: object| null, // as informaçoes de fato
    changeData: Function; // muda informação
}

interface Iprops{
    children?: ReactNode
}

const DataContext = createContext <Idata>({} as Idata); // dados do meu contexto

// Essa função deve ser usava como elemento tsx que limita a area dos dados
export function DataProvider({children}: Iprops){
    
    // Esse state será usado pela aplicação que estiver dentro do DataProvider
    const [ data, setData ] = useState<object>({primeiro: "sim"});
    console.log(data);

    return (
        <DataContext.Provider value={{dado: data, changeData: setData}}>
            {children}
        </DataContext.Provider>
    )
}

// Dados exportados: visiveis somente para seu contexto
export default DataContext
