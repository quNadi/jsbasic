//konstruktor point
function Point(x,y) {
    this.x=x;
    this.y=y;  // wspolrzedne zaczynaja sie w 0,0 a koncza 800,600
}
//konstruktor Line pobiera dwa punkty
function Line(p1,p2) {
    this.p1=p1;
    this.p2=p2;
    this.length=Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2));
}
//konstruktor shape figura przechowuje punkty i line pom nimi
function Shape() {
    this.points=[];
    this.lines=[];
    //this.init();
}
//metody Shape.prototype
Shape.prototype={
    //ustawienie wskaźnika na konstruktor
    constructor:Shape,
    // ustawia wskaxnik this.context na obiekt canvas
    /*init:function () {
        if(typeof this.content==='undefined'){
            var canvas=document.getElementById('canvas');
            Shape.prototype.context=canvas.getContext('2d')
        }
    }*/
    //metoda rysujaca figure przechodzaca przez points
    draw:function () {
        var ctx=this.context;
        ctx.strokeStyle=this.getColor();
        ctx.beginPath();
        ctx.moveTo(this.points[0].x,this.points[0].y);
        for(var i=1;i<this.points.length;i++){
            ctx.lineTo(this.points[i].x,this.points[0].y)

            ctx.closePath() ;
            ctx.stroke()}
    },
    //metoda generujaca losowy kolor
    getColor:function () {
        var rgb=[];
        for(var i=0;i<3;i++){
            rgb[i]=Math.round(255*Math.random());
        }
        return 'rgb(' +rgb.join(',')+')'
    },
    //metoda ktora przechodzi przez tablice punktow tworzy instancje Line i dodaje do this.lines
    getLines:function () {
        if(this.lines.length>0){
            return this.lines;
        }
        var lines=[];
        for(var i=0;i<this.points.length;i++){
            lines[i]=new Line(this.points[i],(this.points[i+1])?this.points[i+1]:this.points[0]);
        }
        this.lines=lines;
        return lines;
    },
    //metoda obliczania pola ktora bedzie implementowana przez dzieci
    getArea:function () {},
    //metoda obliczajca obwod
    getObwod:function () {
        var lines=this.getLines();
        var perim=0;
        for(var i=0;i<lines.length;i++){
            perim+=lines[i].length;
        }
        return perim;
    }
};
//KONSTRUKTORY DZIECI
//trojkat
function Tri(a,b,c){
    this.points=[a,b,c];
    this.getArea=function () {
        var p=this.getObwod();
        var s=p/2;
        return Math.sqrt(               //wzor Herona s(s-a)(s-b)(s-c)
            s* (s-this.lines[0].length) * ( s-this.lines[1].length) * (s-this.lines[2].length));
    };
}
//prostokat
function Rect(p,sidea,sideb){
    this.points=[
        p,
        new Point(p.x+sidea,p.y),
        new Point(p.x+sidea,p.y+sideb),
        new Point(p.x,p.y+sideb)
    ];
    this.getArea=function () { return sidea*sideb;}
}
//kwadratu
function Square(p,side){
    Rect.call(this,p,side,side)
}
//-----DZIEDZICZENIE
(function () {
    var s=new Shape();
    Tri.prototype=s;
    Rect.prototype=s;
    Square.prototype=s;

})();
var p1=new Point(100,100);
var p2=new Point(300,100);
var p3=new Point(200,0);

var t=new Tri(p1,p2,p3);
t.draw();
t.getObwod();
t.getArea();
var r=new Rect(new Point(200,200),50,100);
r.draw();
r.get();

var s=new Square(new Point(130,130),50);
s.draw();
s.getArea();
s.getObwod();
new Square(p1,200).draw();