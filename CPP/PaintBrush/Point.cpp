#include <iostream>
using namespace std;
#include "Point.h"

Point::Point() {
	this->x=this->y=0;
}

Point::Point(int xx, int yy) {
	this->x=xx;
	this->y=yy;
}

void Point::Display(){
	cout<< "{X="<<x<< ", Y="<<y <<"}";
}
