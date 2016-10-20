$(function(){
    // スクロールバーの横幅を取得
    $('html').append('<div class="scrollbar" style="overflow:scroll;"></div>');
    var scrollsize = window.innerWidth - $('.scrollbar').prop('clientWidth');
    $('.scrollbar').hide();

    // 「.modal-open」をクリック
    $('#BJ').find('.detail_btn').click(function(){
        // html、bodyを固定（overflow:hiddenにする）
        $('html, body').addClass('lock');

        // オーバーレイ用の要素を追加
        $('body').append('<div class="modal-overlay"></div>');

        // オーバーレイをフェードイン
        $('.modal-overlay').fadeIn('slow');

        // モーダルコンテンツのIDを取得


         // モーダルコンテンツを囲む要素を追加
        $('#BJ').find('.game_details').wrap("<div class='modal-wrap'></div>");

        // モーダルコンテンツを囲む要素を表示
        $('.modal-wrap').show();

        // モーダルコンテンツの表示位置を設定
        modalResize();

         // モーダルコンテンツフェードイン
        $('#BJ').find('.game_details').fadeIn('slow');

        // モーダルコンテンツをクリックした時はフェードアウトしない
        $('#BJ').find('.game_details').click(function(e){
            e.stopPropagation();
        });

        // 「.modal-overlay」あるいは「.modal-close」をクリック
        $('.modal-wrap, .close_btn').off().click(function(){
            // モーダルコンテンツとオーバーレイをフェードアウト
            $('#BJ').find('.game_details').fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(){
                // html、bodyの固定解除
                $('html, body').removeClass('lock');
                // オーバーレイを削除
                $('.modal-overlay').remove();
                // モーダルコンテンツを囲む要素を削除
                $('#BJ').find('.game_details').unwrap("<div class='modal-wrap'></div>");
           });
        });

        // リサイズしたら表示位置を再取得
        $(window).on('resize', function(){
            modalResize();
        });

        // モーダルコンテンツの表示位置を設定する関数
        function modalResize(){
            // ウィンドウの横幅、高さを取得
            var w = $(window).width();
            var h = $(window).height();

            // モーダルコンテンツの横幅、高さを取得
            var mw = $('#BJ').find('.game_details').outerWidth(true);
            var mh = $('#BJ').find('.game_details').outerHeight(true);

            // モーダルコンテンツの表示位置を設定
            if ((mh > h) && (mw > w)) {
                $('#BJ').find('.game_details').css({'left': 0 + 'px','top': 0 + 'px'});
            } else if ((mh > h) && (mw < w)) {
                var x = (w - scrollsize - mw) / 2;
                $('#BJ').find('.game_details').css({'left': x + 'px','top': 0 + 'px'});
            } else if ((mh < h) && (mw > w)) {
                var y = (h - scrollsize - mh) / 2;
                $('#BJ').find('.game_details').css({'left': 0 + 'px','top': y + 'px'});
            } else {
                var x = (w - mw) / 2;
                var y = (h - mh) / 2;
                $('#BJ').find('.game_details').css({'left': x + 'px','top': y + 'px'});
            }
        }

    });
});
