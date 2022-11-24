import {getTurmas, CriarNovaTurma} from './services/turma-service.js'

/**
 * Função responsavel por atualizar a tabela de turmas com os alunos
 */
function atualizarTela(){
    const panelTurmas = document.querySelector(".turmas")

    panelTurmas.innerHTML = ""
    getTurmas().then(turmas => {
        turmas.forEach(turma => {
            let div = document.createElement("div")
            div.classList.add('turma')
            div.innerHTML = `<h2>${turma.nome}</h2>`;

            let alunos = turma.obterAlunosMatriculados().map(aluno => {
                            return `<div>${aluno}</div>`;
                        }).join('')

            div.innerHTML += alunos;
            panelTurmas.appendChild(div)
        })
    })
}

atualizarTela()

document.querySelector('#matricular').addEventListener('click', matriculaAluno);

async function matriculaAluno(){

    document.querySelector('#matricular').setAttribute('disabled', 1)
    console.log('adiciona')
    const nome = document.querySelector('#nome').value
    const pegaTurmas = await getTurmas()
    let conseguiMatricular = false;

    for(let i = 0; i < pegaTurmas.length ; i++) {

      const alunos = pegaTurmas[i].obterAlunosMatriculados()

        if(alunos.length < 7){
            await pegaTurmas[i].MatricularAluno(nome)
            conseguiMatricular = true

            atualizarTela()
            document.querySelector('#matricular').removeAttribute('disabled')
        }
    }
 
    if(!conseguiMatricular){
        const turma = await CriarNovaTurma()
        await turma.MatricularAluno(nome)
        atualizarTela()
        console.log('remove')
        document.querySelector('#matricular').removeAttribute('disabled')
    }
}