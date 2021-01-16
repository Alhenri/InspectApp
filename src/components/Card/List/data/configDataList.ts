interface IDataIn{
    plano: string,
    responsavel: string,
    status: string,
    hora: string,
    data: string
}

interface IDataOut{
    plano: string,
    responsavel: string,
    status: string,
    hora: string,
    data: string
}

export default class DataList{
    inData: IDataIn[];
    outData: IDataOut[];

    constructor(dado: object[]){
        this.inData = dado as IDataIn[];
        this.outData = []; // começa vazio
    }

    dataConverter(){
        this.inData.map(
            (data) =>{
                this.outData.push({
                    plano: data.plano,
                    responsavel: data.responsavel,
                    status: data.status,
                    hora: data.hora,
                    data: data.data
                })
            }
        )
    }
}