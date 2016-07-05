( function ( exports ) {
    /*
    ***{
    
        xxx: {
            pay: [{
                name: ‘rent’,
                price: 500,
            }],
            income:[{
                name: ‘rent’,
                price: 500
            }],
            initVal: 'hello world'
        } 

    }
     */

    exports.detailList = {
        fetch: function () {
            return JSON.parse( localStorage.getItem( 'detail-list' ) || '{}' );
        },
        save: function ( lists ) {
            localStorage.setItem( 'detail-list', JSON.stringify( lists ) );
        }
    };

} )( window );