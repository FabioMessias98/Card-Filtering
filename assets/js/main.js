(function() {
    const field = document.querySelector( '.js-field' )
    const cards = document.querySelectorAll( '.js-card' )
    let status = false

    function cardToggle( element, status ) {
        if( status ) {
            setTimeout(function() {
                element.style.display = 'block'
            }, 1000)
        } else {
            setTimeout(function() {
                element.style.display = 'none'
            }, 1000)
        }
    }

    field.addEventListener( 'input', function() {
        if( field.value != '' ) {
            for( let card of cards ) {
                let title = card.querySelector( '.js-card-title' )
                title = title.textContent.toLowerCase()

                let fieldFilter = field.value.toLowerCase()

                if( !title.includes( fieldFilter ) ) {
                    card.classList.add( 'is-disable' )
                    status = false
                    cardToggle( card, status )
                } else {
                    card.classList.remove( 'is-disable' )
                    status = true
                    cardToggle( card, status )
                }
            }
        } else {
            for( let card of cards ) {
                card.classList.remove( 'is-disable' )
                status = true
                cardToggle( card, status )
            }
        }
    })
})()