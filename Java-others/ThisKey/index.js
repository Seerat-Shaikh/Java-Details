// method => obj
// function => global (window, global)

/*const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b'); //{}*/

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
        
    }
};

video.showTags(); //a a b b c c
