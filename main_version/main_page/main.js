$(document).ready(function() {
    const $spinner = $('.spinner');
    const $texts = $('.text');
    let rotation = 0;
    let lastAngle = 0;
    let velocity = 3.5;
    let friction = 0.99; // Коэффициент трения для замедления движения спинера.
    let isDragging = false;

    // Закидываем логику кручения на спинер.
    interact('.spinner').draggable({
        onstart: function(event) {
            lastAngle = getAngle(event.pageX, event.pageY);
            velocity = 0;
            isDragging = true;
        },
        onmove: function(event) {
            const angle = getAngle(event.pageX, event.pageY);
            const delta = angle - lastAngle;
            rotation += delta;
            velocity = delta;
            $spinner.css('transform', `rotate(${rotation}deg)`);
            $texts.css('transform', `rotate(${-rotation}deg)`);
            lastAngle = angle;
        },
        onend: function(event) {
            isDragging = false;
            spin();
        }
    });

    // Поиск угла.
    function getAngle(x, y) {
        const rect = $spinner[0].getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        return Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
    }

    // Кручение.
    function spin() {
        rotation += velocity;
        velocity *= friction;
        $spinner.css('transform', `rotate(${rotation}deg)`);
        $texts.css('transform', `rotate(${-rotation}deg)`);
        if (Math.abs(velocity) > 0.05) {
            requestAnimationFrame(spin);
        }
    }
    spin();


    // Обработка нажатий для кликов и тачей.
    if ($(window).width() <= 1000) {
        let touchStartTime = 0;
        const tapThresholdTime = 200;
        const slideThresholdDistance = 30;
        let touchStartX = 0;
        let touchStartY = 0;
        let wasTrueTouch = false;

        $spinner.on('touchstart', function(event) {
            if (!isDragging) {
                touchStartTime = Date.now();
                touchStartX = event.touches[0].clientX;
                touchStartY = event.touches[0].clientY;
                wasTrueTouch = true;
            }
        });

        $spinner.on('touchend', function(event) {
            if (wasTrueTouch) {
                const touchDuration = Date.now() - touchStartTime;
                const distanceX = event.changedTouches[0].clientX - touchStartX;
                const distanceY = event.changedTouches[0].clientY - touchStartY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                if (touchDuration < tapThresholdTime && distance < slideThresholdDistance) {
                    velocity = 0;
                }
            }
            wasTrueTouch = false;
        });
    }
    else {
        let clickStartX = 0;
        let clickStartY = 0;
        let wasTrueClick = false;
        const slideThresholdDistance = 30;

        $spinner.on('mousedown', function(event) {
            if (!isDragging) {
                console.log("mousedown on spinner")
                clickStartX = event.clientX;
                clickStartY = event.clientY;
                wasTrueClick = true;
            }
        });

        $spinner.on('mouseup', function(event) { 
            if (wasTrueClick) {
                console.log("mouseup on spinner")
                const distanceX = event.clientX - clickStartX;
                const distanceY = event.clientY - clickStartY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                if (distance < slideThresholdDistance) {
                    velocity = 0;
                }
            }
            wasTrueClick = false;
        });


        // Переход по ссылкам.
        let clickStartX_ref = 0;
        let clickStartY_ref = 0;
        var clickedElementId = "";

        $('.text').on('mousedown', function(event) {
            clickedElementId = $(this).attr('id');
            clickStartX_ref = event.clientX;
            clickStartY_ref = event.clientY;
        });

        $('.text').on('mouseup', function(event) {
            if (clickedElementId != "") {
                const distanceX = event.clientX - clickStartX_ref;
                const distanceY = event.clientY - clickStartY_ref;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                if (distance < slideThresholdDistance) {
                    if (clickedElementId == "text1" || clickedElementId == "product1-number")
                        window.location.href = 'https://system123.ru/demo1/';
                    else if (clickedElementId == "text2" || clickedElementId == "product2-number")
                        window.location.href = '../temporary_page1/index.html';
                    else if (clickedElementId == "text3" || clickedElementId == "product3-number")
                        window.location.href = '../temporary_page2/index.html';
                    clickedElementId = "";
                }
            }
        });


    }
});