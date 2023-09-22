#ifndef SHAPE_H
#define SHAPE_H

class Shape
{
	public:
		Shape();
		Shape(int t);
		~Shape();
		virtual void Display()=0;
	protected:
		int thickness;
		
};

#endif
