interface IDataOut{
  key: string,
  azul: number,
  vermelho: number,
  roxo: number
}
interface IDataIn{
  Day: string,
  Azul: number,
  Vermelho: number,
  Roxo: number
}

// Modelo de dados do grafico de barra
export default class DataBarGraph{
  inData: IDataIn[];
  outData: IDataOut[];

  constructor(data: object[]){
    this.inData = data as IDataIn[];
    this.outData = [] // Valor inicial
  }

  converterData(){
    this.inData.map(
      (data) => {
        const aux: IDataOut = {
          key: data.Day,
          azul: data.Azul,
          vermelho: data.Vermelho,
          roxo: data.Roxo
        }
        this.outData.push(aux);
      }
    )
  }

}