;
( function ( exports ) {
    exports.app = new Vue( {
        el: '#app',
        data: {
            lists: detailList.fetch()
        },
        methods: {
            addPayItem: function () {
                if ( this.payItem ) {
                    this.payLists.push( this.payItem );
                }
            },
            editItem: function ( item ) {

            },
            doneEdit: function ( index, item ) {
                this.payLists[ index ] = item;
            },
            cancelEdit: function ( item ) {

            }
        },
        watch: {
            payLists: {
                handler: function ( type, lists ) {
                    accountList.savePayList( lists );
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