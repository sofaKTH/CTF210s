#include <stdio.h>
#include <unistd.h>
#include <sys/mman.h>
#include <stdlib.h>

#define BUF_SIZE 512

void prompt_and_repeat(const char * msg) {
    char buf[BUF_SIZE] = {0};
    printf(msg);
    fflush(stdout);
    fgets(buf, BUF_SIZE, stdin);
    printf(buf);
    putchar('\n');
}

int main() {
    volatile size_t size = 0;
    volatile int prot =  PROT_READ | PROT_WRITE;
    void * addr = mmap(NULL, size, prot, MAP_SHARED | MAP_ANON, -1, 0);
    for (volatile int i = 0; i < 1; ++i) {
        prompt_and_repeat("Input: ");
    }
    prompt_and_repeat("Final wish: ");
}
