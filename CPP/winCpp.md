# Windows Programming using C++


Windows Programming is the C programming language in which the Microsoft Windows Operating System is written. In the world, most of the developers use C windows programming to develop software than Object-Oriented languages. To learn this language,you must have complete knowledge about basics of C/C++ programming language. Even the CLR of .NET framework is written in windows programming.


## Procedure
- Step 1. Start Dev C++  & Go to File, New, then Project,
- Step 2. Select Windows Application Project.,
- Step 3. Enter project name & click ok.
- Step 4. Compile and Run Project.


## Description:

- <b>Windows.h</b>: This is the header file for windows program.
- <b>WINAPI</b>: This is Windows Application Programming Interface(WINAPI) to tell the compiler that this program contain graphical components than console components.
- <b>WinMain</b>: This is the main function of all windows programs.This function takes four parameters.It is same as main() function in simple C/C++ programs.
- <b>HINSTANCE</b>: This is Handle to Instance.As you know what is the meaning of instance in Object-Oriented programming. It is the number used as object.In this program the object of program is handled by itself.There may be many instances of one program.This handles only new comer instance. Next parameter hPrevInstance handles previous instance.
- <b>PSTR</b>: This is Pointer to String parameter.It is same as char* but meaning is different.This parameter is same as command line argument(args) in Object-Oriented programming language.
- <b>MessageBox</b>: This method display a message box.
- <b>TEXT</b>: This function is same as char* in C/C++ but in windows it is PCWSTR(Pointer to Character Wide String).
- <b>MB_OK</b>: This is #define function for adding only OK button to messagebox. 


## Description

- <b>WNDCLASS</b> : Structure to create window class.
- <b>MSG</b> : Message structure
- <b>HWND</b> : Handle to Window.This structure handles the created window.
- <b>HBRUSH</b> : Handle to Brush.
- <b>LoadCursor</b> : This function load cursor for created window.IDC stands for ID number for Cursor.
- <b>LoadIcon</b> : This function load icon for created window.IDI stands for ID number for Icon.
- <b>GetStockObject</b> : Obtains a graphic object, in this case a brush used for painting the window's background.
- <b>RegisterClass</b> : This function takes one parameter of WNDCLASS structure variable.
- <b>CreateWindow</b> : This function create the window.
- <b>Parameters</b> : CreateWindow(window_name, window_text, window_style, x, y, width, height, parent, menu, hInstance, lparam);
- <b>ShowWindow</b> : This function shows the created window.
- <b>UpdateWindow</b>: This function update the created window. Everything in windows programs are handled using messages.Messages are the numbers stored in a queue. Each number define the specific task which will be performed by program.
- <b>GetMessage</b> : This function get the message from the queue.
- <b>LRESULT</b> : It means the generated result is Long type.
- <b>CALLBACK</b> : Defining this keyword,it specify the function to call it back.
- <b>WPARAM</b> : PARAM means parameter & W stands for WORD which is 16 bit unsigned short integer.
- <b>LPARAM </b>: L stands for Long.
- <b>HDC</b> : Stands for Handle to Device Context.It is a structure that handles to a devices such as graphics.
- <b>PAINTSTRUCT</b> : It is a structure for paint components.
- <b>WM_CREATE</b> : This function is same as Form_Load() function in C#.It means that window is created.
- <b>WM_PAINT</b> : This function paints the created window.In C# it is same as OnPaint() method.
- <b>WM_DESTROY</b> : This is same as window closing event. 


### DefWindowProc

This function returns the generated result message to the WinMain function. WNDCLASS structure indexes In above program you can see the structure components with prefixes like cbClsExtra,hbrBackground,lpfnWndProc etc.

#### So what are they?

- <b>cb</b> : counts of bytes
- <b>hbr</b> : handle to brush
- <b>h</b> : handle
- <b>lpfn</b> : long pointer to function
- <b>lpsz</b> : long pointer to string terminated with zero.
Other important prefixes

- <b>CS</b> : Class Style
- <b>CW</b> : Create Window
- <b>DT</b> : Draw Text
- <b>IDI</b> : ID number for Icon
- <b>IDC</b> : ID number for Cursor
- <b>MB</b> : Message Box
- <b>SND</b> : Sound
- <b>WM</b> : Window Message
- <b>WS</b> : Window Style