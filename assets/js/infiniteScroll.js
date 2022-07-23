var pageDetailJson = [
    {
        title: 'Photo',
        desc: 'Chicago',
        descCht: '芝加哥',
        src: 'assets/images/photo001.jpg',
        alt: 'Chicago'
    },
    {
        title: 'Illustration',
        desc: 'Something Wrong',
        descCht: '有點不對勁',
        src: 'assets/images/illustration036.jpg',
        alt: 'Something Wrong'
    },
    {
        title: 'Photo',
        desc: 'Chicago',
        descCht: '芝加哥',
        src: 'assets/images/photo019.jpg',
        alt: 'Chicago'
    },
    {
        title: 'Photo',
        desc: 'Chicago',
        descCht: '芝加哥',
        src: 'assets/images/photo022.jpg',
        alt: 'Chicago'
    },
    {
        title: 'Illustration',
        desc: 'Open Book',
        descCht: '書中旅行',
        src: 'assets/images/illustration029.jpg',
        alt: 'Open Book'
    },
    {
        title: 'Illustration',
        desc: 'Open Book',
        descCht: '書中旅行',
        src: 'assets/images/illustration030.jpg',
        alt: 'Open Book'
    },
    {
        title: 'Motion Graphics',
        desc: 'Counting Stars',
        descCht: '數星星',
        src: 'assets/images/video_star.gif',
        alt: 'Counting Stars'
    },
    {
        title: 'Motion Graphics',
        desc: 'Metro',
        descCht: '搭車',
        src: 'assets/images/video_train.gif',
        alt: 'Metro'
    },
    {
        title: 'Design',
        desc: 'Website Visual',
        descCht: '網頁視覺',
        src: 'assets/images/design039.jpg',
        alt: 'Website Visual'
    },
    {
        title: 'Design',
        desc: 'Website Visual',
        descCht: '網頁視覺',
        src: 'assets/images/design025.jpg',
        alt: 'Website Visual'
    },
    {
        title: 'Design',
        desc: 'Website Visual',
        descCht: '網頁視覺',
        src: 'assets/images/design040.jpg',
        alt: 'Website Visual'
    },
    {
        title: 'Illustration',
        desc: 'Oops',
        descCht: '感覺不妙',
        src: 'assets/images/illustration016.jpg',
        alt: 'Oops'
    },
    {
        title: 'Illustration',
        desc: 'Just Run',
        descCht: '別問，快跑',
        src: 'assets/images/illustration013.jpg',
        alt: 'Just Run'
    },
    {
        title: 'Illustration',
        desc: 'Showtime',
        descCht: '好戲即將登場',
        src: 'assets/images/illustration001.jpg',
        alt: 'Showtime'
    },
    {
        title: 'Illustration',
        desc: 'Supermarket',
        descCht: '罐頭日記',
        src: 'assets/images/illustration063.jpg',
        alt: 'Supermarket'
    },
    {
        title: 'Photo',
        desc: 'Family Day',
        descCht: '家庭日',
        src: 'assets/images/photo012.jpg',
        alt: 'Family Day'
    },
    {
        title: 'Redesign',
        desc: 'The Book',
        descCht: '《銀河便車指南》書封',
        src: 'assets/images/design048.jpg',
        alt: 'The Book'
    },
    {
        title: 'Redesign',
        desc: 'The Book',
        descCht: '《銀河便車指南》書封',
        src: 'assets/images/design050.jpg',
        alt: 'The Book'
    },
    {
        title: 'Redesign',
        desc: 'The Book',
        descCht: '《銀河便車指南》書封',
        src: 'assets/images/design056.jpg',
        alt: 'The Book'
    },
    {
        title: 'Redesign',
        desc: 'The Book',
        descCht: '《銀河便車指南》書封',
        src: 'assets/images/design057.jpg',
        alt: 'The Book'
    },
    {
        title: 'Illustration',
        desc: 'Vampire No.1',
        descCht: '吸血鬼1號',
        src: 'assets/images/illustration002.jpg',
        alt: 'Vampire No.1'
    },
    {
        title: 'Illustration',
        desc: 'Vampire No.2',
        descCht: '吸血鬼2號',
        src: 'assets/images/illustration003.jpg',
        alt: 'Vampire No.2'
    },
    {
        title: 'Illustration',
        desc: 'Vampire No.3',
        descCht: '吸血鬼3號',
        src: 'assets/images/illustration0034.jpg',
        alt: 'Vampire No.3'
    },
    {
        title: 'Design',
        desc: 'Nice and Quite',
        descCht: '片刻寧靜',
        src: 'assets/images/design013.jpg',
        alt: 'Nice and Quite'
    },
    {
        title: 'Illustration',
        desc: 'Natural Kids',
        descCht: '自然系小孩',
        src: 'assets/images/illustration024.jpg',
        alt: 'Natural Kids'
    },
    {
        title: 'Illustration',
        desc: 'Natural Kids',
        descCht: '自然系小孩',
        src: 'assets/images/illustration023.jpg',
        alt: 'Natural Kids'
    },
    {
        title: 'Illustration',
        desc: 'Natural Kids',
        descCht: '自然系小孩',
        src: 'assets/images/illustration026.jpg',
        alt: 'Natural Kids'
    },
    {
        title: 'Illustration',
        desc: 'Disturbed',
        descCht: '不安',
        src: 'assets/images/illustration044.jpg',
        alt: 'Disturbed'
    },
    {
        title: 'Illustration',
        desc: 'Wait and see',
        descCht: '等著瞧',
        src: 'assets/images/illustration005.jpg',
        alt: 'Wait and see'
    },
];

for (let i = 0; i < pageDetailJson.length; i++) {
    let data = pageDetail[i];
    console.log(
        [
            data.title,
            data.desc,
            data.descCht,
            data.src,
            data.alt,
        ]
    );
    $('#scroll-content').append(
        `<div class="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6=">
            <div class="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                <a href="javascript:void(0)">
                    <span class="image">
                        <span class="img">
                            <img src=` + data.src + `" ` + data.alt + `" />
                        </span>
                    </span>
                    <span class="desc">
                        <span class="category splitting-text-anim-4 scroll-animate" data-splitting="chars" data-animate="active">` + data.title + `</span>
                        <span class="name splitting-text-anim-4 scroll-animate" data-splitting="words" data-animate="active">` + data.desc + `<span class="small">`  + '  ' + data.descCht + ` </span></span>
                    </span>
                </a>
            </div>
        </div>`
    )
    console.log('....');
};