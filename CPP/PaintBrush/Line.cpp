#include "Line.h"
#include <iostream>
using namespace std;
Line::Line()
{
}

Line::Line(Point pt1, Point pt2, int t):Shape(t)
{	
	this->startPoint=pt1;
	this->endPoint=pt2;
}

void Line::Display(){
	cout<<"Line \n";
	cout<<"StartPoint =";
	this->startPoint.Display();
	cout<<"EndPoint =";
	this->endPoint.Display();
	cout<<"Thickness="<<this->thickness;
}
Line::~Line()
{
}
