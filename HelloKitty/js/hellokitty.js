var hellokitty = new helloKittyObject();

var canvas = hellokitty.querySelect("#canvas");

var ctx =hellokitty.setContext("2d",canvas);

helloKittyObject.prototype.draw=function (){
	

	ctx.beginPath();//外部头部边框
	ctx.globalCompositeOperation="destination-over";
	
	ctx.lineWidth = 8;
	
	ctx.moveTo(800,100);
	
	ctx.quadraticCurveTo(640,-50, 620, 150);
	
	ctx.moveTo(925,100);
	
	ctx.quadraticCurveTo(880,80, 796,100);
	
	ctx.moveTo(1190,145);
	
	ctx.quadraticCurveTo(1195,-30, 1080 ,65);
	
	ctx.moveTo(930,595);
	 
	ctx.bezierCurveTo(500,610, 525, 250,645,135);
	
	ctx.moveTo(1200,248);
	
	ctx.bezierCurveTo(1250,330, 1280, 510,1150,548);

	ctx.stroke();
	
	ctx.closePath();
	
	ctx.beginPath();//身子
	
	ctx.lineWidth = 7;
	
	ctx.moveTo(760,578);
	
	ctx.bezierCurveTo(520,800,480,940,700,940);
	
	ctx.lineTo(1000,940);
	
	ctx.quadraticCurveTo(1000,620,970,605);
	
	ctx.stroke();
	
	ctx.fillStyle="red";
	
	ctx.fill();
	
	ctx.beginPath();
	
	ctx.moveTo(1000,940);
	
	ctx.quadraticCurveTo(1250,920,1100,650);
	
	ctx.stroke();
	
	ctx.beginPath();//手

	ctx.globalCompositeOperation="source-over";
	
	ctx.moveTo(960,660);
	
	ctx.bezierCurveTo(900,570,750,620,830,730);
	
	ctx.closePath();
	
	ctx.stroke();
	
	ctx.beginPath();//手
	
	ctx.fillStyle ="white";
	
	ctx.moveTo(830,730);
	
	ctx.bezierCurveTo(965,860,1020,700,986,650);
	
	ctx.fill();
	
	ctx.stroke();
	
	ctx.beginPath();//手指
	
	ctx.globalCompositeOperation="source-over";

	ctx.fillStyle ="white";
	
	ctx.moveTo(960,660);
	
	ctx.quadraticCurveTo(1050,610,986,650);
	
	ctx.stroke();
	
	ctx.fill();
	
	ctx.beginPath();//尾巴
	
	ctx.lineWidth = 7;
	
	ctx.moveTo(575,800);
	
	ctx.bezierCurveTo(380,750,340,950,589,920);
	
	ctx.stroke();			
	
	ctx.beginPath();//蝴蝶结中间圆
	
	ctx.lineWidth = 5;
	
	ctx.fillStyle ="red";
		
	ctx.globalCompositeOperation="destination-over";
	
	ctx.arc(1064, 155, 40, 0, Math.PI*2);
	
	ctx.stroke();
	
	ctx.closePath();
	
	ctx.fill();
	
	ctx.beginPath();//蝴蝶结的小耳朵(左)
	
	ctx.lineWidth = 5;
	
	ctx.fillStyle ="red";
	
	ctx.arc(1035, 131, 30, 2,Math.PI*1.8 );
	
	ctx.stroke();
	
	ctx.fill();
		
	ctx.beginPath();//蝴蝶结的小耳朵(右)
	
	ctx.lineWidth = 5;
	
	ctx.fillStyle ="red";
	
	ctx.arc(1092, 173, 30, 2.3,Math.PI*1.65,true);
	
	ctx.stroke();
	
	ctx.fill();
	
	ctx.beginPath();//蝴蝶结的耳朵左
	
	ctx.lineWidth = 5;
	
	ctx.fillStyle ="red";
	
	ctx.moveTo(1035, 185);
	
	ctx.bezierCurveTo(750, 180, 1080, -120,1090,122 );

	ctx.stroke();
	
	ctx.fill();
	
	ctx.beginPath();//蝴蝶结的耳朵右
	
	ctx.lineWidth = 5;
	
	ctx.fillStyle ="red";
	
	ctx.moveTo(1050, 195);
	
	ctx.bezierCurveTo(1060, 450, 1400, 120,1098,130 );
	
	ctx.stroke();
	
	ctx.fill();
	
	ctx.beginPath();//左边第一个胡须
	
	ctx.lineWidth = 7;
	
	ctx.moveTo(650,300);
	
	ctx.quadraticCurveTo(560,270,480,280);
	
	ctx.stroke();
	
	ctx.beginPath();//左边第二个胡须
	
	ctx.lineWidth = 7;
	
	ctx.moveTo(650,360);
	
	ctx.quadraticCurveTo(540,360,510,360);
	
	ctx.stroke();
	
	ctx.beginPath();//左边第三个胡须
	
	ctx.lineWidth = 7;
	
	ctx.moveTo(650,430);
	
	ctx.quadraticCurveTo(540,450,480,480);
	
	ctx.stroke();
	
	ctx.beginPath();//右边第一个胡须
	
	ctx.lineWidth = 7;
	
	ctx.moveTo(1150,300);
	
	ctx.quadraticCurveTo(1200,270,1320,280);
	
	ctx.stroke();
	
    ctx.beginPath();//右边第二个胡须
	
	ctx.lineWidth = 7;
	
	ctx.moveTo(1150,360);
	
	ctx.quadraticCurveTo(1200,360,1290,360);
	
	ctx.stroke();
	
	ctx.beginPath();//右边第三个胡须
	
	ctx.lineWidth = 7;
	
	ctx.moveTo(1150,430);
	
	ctx.quadraticCurveTo(1200,440,1320,480);
	
	ctx.stroke();

	this.setParamEllipse(ctx,900,450,40,20);//嘴巴  
	
	
	this.setParamEllipse(ctx,750,350,20,35,true);//左边眼睛
	
	this.setParamEllipse(ctx,1050,350,20,35,true);//右边眼睛
	
	this.Heart(ctx,1050,620,8);
	

	
}	

hellokitty.draw();