interface IDataIn{
    nome: string,
    planejado: number,
    realizado: number,
    lastAtt: string

}
interface IDataOut{
    nome: string,
    planejado: number,
    realizado: number,
    lastAtt: string
}


export default class DataTable {
    inData: IDataIn[];
    outData: IDataOut[];

    constructor(data: object[]){
        this.inData = data as IDataIn[];
        this.outData = []
    }

    // Tornar ela privada e executar no construtor pra evitar uso incorreto
    dataConverter(){
        this.inData.map(
            (data) => {
                this.outData.push({
                    nome: data.nome,
                    planejado: data.planejado,
                    realizado: data.realizado,
                    lastAtt: data.lastAtt
                })
            }
        )
    }
}