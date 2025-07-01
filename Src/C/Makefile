all: trapped 

trapped: trapped.c parse.c moves.c
	gcc -o trapped parse.c moves.c trapped.c

parse: parse.c moves.h moves.c
	gcc -o parse parse.c moves.c
