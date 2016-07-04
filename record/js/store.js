( function ( exports ) {

    exports.accountList = {
        fetch: function ( type ) {
            return JSON.parse( localStorage.getItem( 'detail-list' ) || '[]' )[ type ];
        },
        save: function ( items ) {
            localStorage.setItem( 'detail-list', JSON.stringify( items ) );
        }
    };

} )( window );