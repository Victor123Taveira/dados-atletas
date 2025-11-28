class Atleta{
    constructor(nome,idade,peso,altura,notas){
        
                this.nome= nome;
                this.idade= idade;
                this.peso= peso;
                this.altura= altura;
                this.notas= notas;
                this.categoria= this.calculaCategoria();
                this.IMC= this.calculaIMC();
                this.MediaValida= this.calculaMediaValida();
    }
        calculaCategoria(){
        let categoria = "";
      
        if(this.idade >= 9 && this.idade <= 11){
        categoria = "Infantil"
        }
        else if(this.idade >=12 && this.idade <=13){
          categoria = "Categoria Juvenil"
        }  
        else if(this.idade >=14 && this.idade <=15){
          categoria = "Categoria Intermediário"
        }
        else if(this.idade >=16 && this.idade <30){
          categoria = "Categoria Adulto"
        }
        else if(this.idade >=30){
          categoria = "Categoria Master"
        }  
        else{ 
          categoria = "Idade inválida para categoria"
        }
        return categoria
      }
    
    calculaIMC(){
        return (this.peso / (this.altura * this.altura)).toFixed(2)
    }

    calculaMediaValida(){
        let ordenadas = this.notas.slice().sort((a, b) => a - b);
        let media = (ordenadas[1] + ordenadas[2] + ordenadas[3]) / 3;
        return media.toFixed(2);
    }
    obtemNomeAtleta(){
        return this.nome}
    obtemIdadeAtleta(){
        return this.idade
    }
    obtemPesoAtleta(){
        return this.peso
    }
   obtemNotasAtleta(){
        return this.notas
   }
    obtemCategoria(){
        return this.categoria
    }
    obtemIMC(){
        return this.IMC
    }
    obtemMediaValida(){
        return this.MediaValida
    }
}
    const atletas = [
        new Atleta("Cesar Abascal",30,82,1.79,[10, 9.34, 8.42, 10, 7.88]),
        new Atleta("Fernando Puntel",20,72,1.79,[8, 10, 10, 7, 9.33]),
        new Atleta("Daiane Jelinsky",10,52,1.59,[7, 10, 9.5, 9.5, 8]),
        new Atleta("Bruno Castro",18,22,1.79,[10, 10, 10, 9, 9.5]),
                ];
    console.log(atletas);


