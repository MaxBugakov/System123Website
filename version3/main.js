$(document).ready(function() {
    const $spinner = $('.spinner');
    const $texts = $('.text');
    let rotation = 0;
    let lastAngle = 0;
    let velocity = 0;
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
            textView();
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
        textView();
    }

    // Чтобы тексты не выходили за экран.
    function textView () {
        // console.log(rotationParser(rotation));
        // Текст 1.
        if (rotationParser(rotation) < 360 && rotationParser(rotation) > 270) {
            let deltaTop = 27 + 67;
            let deltaLeft = 197 - 106;
            const $text1 = $('#text1');
            let newTop = -67 + deltaTop * ((360 - rotationParser(rotation))/(360-270));
            $text1.css("top", newTop);
            let newLeft = 106 + deltaLeft * ((360 - rotationParser(rotation))/(360-270));
            $text1.css("left", newLeft);
        }
        if (rotationParser(rotation) < 270 && rotationParser(rotation) > 180) {
            let deltaTop = -67 - 27;
            let deltaLeft = 106 - 10;
            const $text1 = $('#text1');
            let newTop = 27 + deltaTop * ((270 - rotationParser(rotation))/(270-180));
            $text1.css("top", newTop);
            let newLeft = 10 + deltaLeft * ((270 - rotationParser(rotation))/(270-180));
            $text1.css("left", newLeft);
        }
        if (rotationParser(rotation) < 180 && rotationParser(rotation) > 90) {
            let deltaTop = 27 + 67;
            let deltaLeft = 197 - 106;
            const $text1 = $('#text1');
            let newTop = -67 + deltaTop * ((180 - rotationParser(rotation))/(180-90));
            $text1.css("top", newTop);
            let newLeft = 106 + deltaLeft * ((180 - rotationParser(rotation))/(180-90));
            $text1.css("left", newLeft);
        }
        if (rotationParser(rotation) < 90 && rotationParser(rotation) > 0) {
            let deltaTop = -67 - 27;
            let deltaLeft = 106 - 10;
            const $text1 = $('#text1');
            let newTop = 27 + deltaTop * ((90 - rotationParser(rotation))/(90));
            $text1.css("top", newTop);
            let newLeft = 10 + deltaLeft * ((90 - rotationParser(rotation))/(90));
            $text1.css("left", newLeft);
        }


        // Текст 2.
        if (rotationParser(rotation) < 240 && rotationParser(rotation) > 150) {
            let deltaTop = 244 - 221;
            let deltaLeft = 104 - 247;
            const $text1 = $('#text2');
            let newTop = 221 + deltaTop * ((240 - rotationParser(rotation))/(240-150));
            $text1.css("top", newTop);
            let newLeft = 247 + deltaLeft * ((240 - rotationParser(rotation))/(240-150));
            $text1.css("left", newLeft);
        }
        if (rotationParser(rotation) < 150 && rotationParser(rotation) > 60) {
            let deltaTop = 221 - 90;
            let deltaLeft = 247 - 192;
            const $text1 = $('#text2');
            let newTop = 90 + deltaTop * ((150 - rotationParser(rotation))/90);
            $text1.css("top", newTop);
            let newLeft = 192 + deltaLeft * ((150 - rotationParser(rotation))/90);
            $text1.css("left", newLeft);
        }
        if (rotationParser(rotation) < 60 || rotationParser(rotation) > 330) {
           
            let deltaTop = 244 - 221;
            let deltaLeft = 104 - 247;
            const $text1 = $('#text2');
            if (rotationParser(rotation) < 60) {
                let newTop = 221 + deltaTop * ((60 - (rotationParser(rotation)))/90);
                $text1.css("top", newTop);
                let newLeft = 247 + deltaLeft * ((60 - (rotationParser(rotation)))/90);
                $text1.css("left", newLeft);
            }
            else {
                let newTop = 221 + deltaTop * ((60 + (360 - rotationParser(rotation)))/90);
                $text1.css("top", newTop);
                let newLeft = 247 + deltaLeft * ((60 + (360 - rotationParser(rotation)))/90);
                $text1.css("left", newLeft);
            }
        }
        if (rotationParser(rotation) < 330 && rotationParser(rotation) > 240) {
            let deltaTop = 221 - 90;
            let deltaLeft = 247 - 192;
            const $text1 = $('#text2');
            let newTop = 90 + deltaTop * ((330 - rotationParser(rotation))/90);
            $text1.css("top", newTop);
            let newLeft = 192 + deltaLeft * ((330 - rotationParser(rotation))/90);
            $text1.css("left", newLeft);
        }

        // Текст 3.
        if (rotationParser(rotation) < 120 && rotationParser(rotation) > 30) {
            let deltaTop = 85 - 219;
            let deltaLeft = -36 + 88;
            const $text1 = $('#text3');
            let newTop = 219 + deltaTop * ((120 - rotationParser(rotation))/90);
            $text1.css("top", newTop);
            let newLeft = -88 + deltaLeft * ((120 - rotationParser(rotation))/90);
            $text1.css("left", newLeft);
        }
        if (rotationParser(rotation) < 30 || rotationParser(rotation) > 300) {
            let deltaTop = 219 - 245;
            let deltaLeft = -88 - 55;
            const $text1 = $('#text3');
            if (rotationParser(rotation) < 30) {
                let newTop = 245 + deltaTop * ((30 - (rotationParser(rotation)))/90);
                $text1.css("top", newTop);
                let newLeft = 55 + deltaLeft * ((30 - (rotationParser(rotation)))/90);
                $text1.css("left", newLeft);
            }
            else {
                let newTop = 245 + deltaTop * ((30 + (360 - rotationParser(rotation)))/90);
                $text1.css("top", newTop);
                let newLeft = 55 + deltaLeft * ((30 + (360 - rotationParser(rotation)))/90);
                $text1.css("left", newLeft);
            }
        }
        if (rotationParser(rotation) < 300 && rotationParser(rotation) > 210) {
            let deltaTop = 85 - 219;
            let deltaLeft = -36 + 88;
            const $text1 = $('#text3');
            let newTop = 219 + deltaTop * ((300 - rotationParser(rotation))/90);
            $text1.css("top", newTop);
            let newLeft = -88 + deltaLeft * ((300 - rotationParser(rotation))/90);
            $text1.css("left", newLeft);
        }
        if (rotationParser(rotation) < 210 && rotationParser(rotation) > 120) {
            let deltaTop = 219 - 245;
            let deltaLeft = -88 - 55;
            const $text1 = $('#text3');
            let newTop = 245 + deltaTop * ((210 - rotationParser(rotation))/90);
            $text1.css("top", newTop);
            let newLeft = 55 + deltaLeft * ((210 - rotationParser(rotation))/90);
            $text1.css("left", newLeft);
        }
    }

    // Показывает градус крчуения от 0 до 360.
    function rotationParser (rotation) {
        if (rotation < 0) {
            return 360 + (rotation % 360);
        }
        return rotation % 360;
    }
    
    // Начальные позиции для 2 и 3 текстов.
    let $text2 = $('#text2');
    $text2.css("top", "236px");
    $text2.css("left", "151px");

    let $text3 = $('#text3');
    $text3.css("top", "236px");
    $text3.css("left", "7px");

   

    // Остановка кручение на нажатие.
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
                clickStartX = event.clientX;
                clickStartY = event.clientY;
                wasTrueClick = true;
            }
        });

        $spinner.on('mouseup', function(event) { 
            if (wasTrueClick) {
                const distanceX = event.clientX - clickStartX;
                const distanceY = event.clientY - clickStartY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                if (distance < slideThresholdDistance) {
                    velocity = 0;
                }
            }
            wasTrueClick = false;
        });
    }
});