all: trapped 

trapped: trapped.c trapped.h parse.c parse.h moves.c moves.h heatmap.c heatmap.h
	gcc -o trapped parse.c moves.c heatmap.c trapped.c

parse: parse.c moves.h moves.c
	gcc -o parse parse.c moves.c
