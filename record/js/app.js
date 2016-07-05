;
( function ( exports ) {
    exports.app = new Vue( {
        el: '#app',
        data: {
            getList: detailList.fetch()
        },
        methods: {
            addItem: function ( type ) {
                var newItem = $( '.' + type + ' .add-input' ).val();
                if ( !newItem ) {
                    return;
                }

                this.getList[ type ].push( {
                    name: newItem.split( ':' )[ 0 ],
                    price: newItem.split( ':' )[ 1 ]
                } );

                $( '.' + type + ' .add-input' ).val( '' );
            },
            delItem: function ( type, item ) {
                this.getList[ type ].$remove( item );
            }
        },
        computed: {
            getCount: function () {
                var count = 0;
                for ( var itemName in this.getList ) {
                    if ( itemName == 'pay' ) {
                        this.getList[ itemName ].forEach( function ( item ) {
                            count -= parseInt( item.price );
                        } );
                    } else if ( itemName == 'income' ) {
                        this.getList[ itemName ].forEach( function ( item ) {
                            count += parseInt( item.price );
                        } );
                    }
                }

                return count;
            }
        },
        watch: {
            getList: {
                handler: function ( getList ) {
                    detailList.save( getList );
                },
                deep: true
            }
        },
        directives: {
            'pay-focus': function ( val ) {
                if ( !val ) {
                    return;
                }
                var el = this.el;
                Vue.nextTick( function () {
                    el.focus();
                } );
            }
        }
    } );
} )( window );