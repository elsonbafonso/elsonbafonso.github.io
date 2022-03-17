
/*
Quando clicar no pokemon do menu, precisa escoder o cartão atual, e mostrar o cartão do pokemon selecionada
*/

const selectListPokemon = document.querySelectorAll('.pokemon')
const cardPokemon = document.querySelectorAll('.cartao-pokemon')

selectListPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        /*fechar card aberto*/
        const cardPokemonOpened = document.querySelector('.aberto')
        cardPokemonOpened.classList.remove('aberto')

        /*clicando altera os cards abertos*/
       const idPokemonSelect =  pokemon.attributes.id.value
       const cardPokemonOpen = document.getElementById('cartao-'+idPokemonSelect)

       cardPokemonOpen.classList.add('aberto')

       const menuPokemonActive = document.querySelector('.ativo')
       menuPokemonActive.classList.remove('ativo')

       const idPokemonMenu = document.getElementById(idPokemonSelect)
       idPokemonMenu.classList.add('ativo')
      

    })
})

