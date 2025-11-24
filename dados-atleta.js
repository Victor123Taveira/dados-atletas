let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88],
      idade: 0,
      peso: 0,
      altura: 0,
      categoria:"",
      imc: "",
      mediaValida: "",
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33],
      idade: 0,
      peso: 0,
      altura: 0,
      categoria:"",
      imc: "",
      mediaValida: "",
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8],
      idade: 0,
      peso: 0,
      altura: 0,
      categoria:"",
      imc: "",
      mediaValida: "",
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5],
      idade: 0,
      peso: 0,
      altura: 0,
      categoria:"",
      imc: "",
      mediaValida: "",
    }
   ];

   function calcularNotas(atletas) {
    for (let atleta of atletas) {

        atleta.mediaValida = calcularMediaValida(atleta.notas);
        atleta.categoria = calcularCategoria(atleta.idade);
        atleta.imc = calcularIMC(atleta.peso, atleta.altura);

        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Idade: ${atleta.idade}`);
        console.log(`Categoria: ${atleta.categoria}`);
        console.log(`IMC: ${atleta.imc}`);
        console.log(`Notas: ${atleta.notas.join(", ")}`);
        console.log(`Média válida: ${atleta.mediaValida}`);
        console.log("----------------------------------");
    }
}
calcularNotas(atletas);


function calcularCategoria(idade){
  let categoria = ""

  if(idade >= 9 && idade <= 11){
  categoria = "Infantil"
  }
  else if(idade >=12 && idade <=13){
    categoria = "Categoria Juvenil"
  }  
  else if(idade >=14 && idade <=15){
    categoria = "Categoria Intermediário"
  }
  else if(idade >=16 && idade <30){
    categoria = "Categoria Adulto"
  }
  else if(idade >=30){
    categoria = "Categoria Master"
  }  
  else{ 
    categoria = "Idade inválida para categoria"
  }
  return categoria
}

function calcularIMC(peso,altura){
  return ( peso / (altura * altura)).toFixed(2)
}

function calcularMediaValida(notas) {
  let ordenadas = notas.slice().sort((a, b) => a - b);
  let media = (ordenadas[1] + ordenadas[2] + ordenadas[3]) / 3;
  return media.toFixed(2);
}

function obtemNomeAtleta(atletas){
  return atletas.nome
}

function obtemIdadeAtleta(atletas){
  return atletas.idade
}
function obtemPesoAtleta(atletas){
  return atletas.peso
}
function obtemNotasAtleta(atletas){
  return atletas.notas
}

function obtemCategoria(categoria){
  return categoria
}

function obtemIMC(imc){
  return imc
}

function obtemMediaValida(media){
  return media
}
