function helloKittyObject() {
	
	this.querySelect= function (selected) {
		
		return document.querySelector(selected);
	}
	
	this.setContext =function (getD,canvas) {
		
		canvas.width = window.innerWidth;
		
        canvas.height = window.innerHeight;	
        
		return canvas.getContext(getD);
		
	}
	/*
	 * @param setParamEllipse method 画椭圆
	 * @param ctx setContext方法的返回值
	 * @param x 椭圆的中心点 横坐标
	 * @param y 椭圆的中心点 纵坐标
	 * @param a 是椭圆的横半轴长 (a>0)
	 * @param b 是椭圆的纵半轴长(b>0)
	 */
	this.setParamEllipse =function(ctx,x,y,a,b,fillColorBool) {
		
		
		var step = (a > b) ? 1 / a : 1 / b;
		
		
		ctx.beginPath();
		
		ctx.moveTo(x + a, y); //从椭圆的左端点开始绘制
		
		
		for (var i = 0; i < 2 * Math.PI; i += step)
		
		{
		//参数方程为x = a * cos(i), y = b * sin(i)，
		//参数为i，表示度数（弧度）
		ctx.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
		
		}
		ctx.stroke();
		
		ctx.closePath();
		
		if(fillColorBool == true) {
			
			ctx.fillStyle ="black";
			ctx.fill();
			
		}
		
		
	}
	/*
	 * @param method  Heart 画爱心
	 * 桃心参数方程公式 x =16(sinx)^3 ,y =13cosx-5cos2t-2cos3t-cos4t 
	 * @param ctx setContext方法的返回值
	 * @param x 爱心的x轴位置
	 * @param y 爱心的y轴位置
	 * @param a 
	 */
	
	this.Heart =function(ctx,x,y,a) {
		
    
  		ctx.beginPath();
  
  		ctx.globalCompositeOperation="source-over";
  		
  		ctx.lineWidth = 15;
  		
  		ctx.translate(x,y);
   
		ctx.rotate(3.3);
		for(let i=0; i<50; i++) {
					    
			
		    var step = i/50*(Math.PI*2);//设置心上面两点之间的角度，具体分成多少份，好像需要去试。
		                
					var vector = {
						
					  x : a*(16 * Math.pow(Math.sin(step), 3)),
					  y : a*(13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step))
					  
					}

		            ctx.lineTo(vector.x, vector.y);
		                
		            }
		
		  
		            
					
				  ctx.fillStyle = "red";
				
					  ctx.stroke();
						ctx.fill();
					
				ctx.closePath();
	}
}
