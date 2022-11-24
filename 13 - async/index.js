// const botao = document.querySelector("#enviar")

// botao.addEventListener("click", () => {

// })

// {
//     const minhaFuncao = function(){
//         console.log("ESTA EXECUTANDO")
//     }

//     const minhaPromise = new Promise((resolve,reject) => {
//         console.log("Dentro da promise")
//         resolve()
//     })

//     //Sincrono
//     console.log("INICIO")
//     minhaFuncao()
//     console.log("FIM")

//     //Assincrono
//     console.log("INICIO")
//     minhaPromise.then(() => {
//         console.log("Esta executando")
//     })
//     console.log("FIM")

// }

// {
//     async function retornaPessoas() {
//         const meuFetch = new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(["wesdra", "Joao"])
//             },3000)
//         })

//         return meuFetch
//     }


//     const minhaFuncaoAssicrona = async function(){
//         console.log("1",Date.now())        
//         const pessoasRetornadas = await retornaPessoas()
//                                         // .then((pessoas) => {
//                                         //     console.log("2", "Pessoas")
//                                         //     return pessoas
//                                         // })

//         console.log(pessoasRetornadas)
//         console.log("3",Date.now())
//         console.log("4","ESTA EXECUTANDO")
//     }

//     //Assincrona
//     console.log("INICIO")
//     minhaFuncaoAssicrona()
//     console.log("FIM")



//     //Funcao assicrona Roda seu codigo de forma assincrona
//     //Promise quando preciso controlar o retorno e chamar o reject ou resolve

// }


{
    async function ExibirAlunos(){
        const resposta = await fetch("http://localhost:3000/aluno/todos")
        const alunos = await resposta.json()

        console.log(alunos)
    }

    ExibirAlunos()
}