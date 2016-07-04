( function ( exports ) {

    exports.detailList = {
        fetch: function ( time ) {
            return JSON.parse( localStorage.getItem( 'detail-list' ) || '{}' )[ time ];
        },
        save: function ( items ) {
            localStorage.setItem( 'detail-list', JSON.stringify( items ) );
        }
    };

} )( window );