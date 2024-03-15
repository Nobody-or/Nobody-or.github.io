#include <bits/stdc++.h>
using namespace std;
#define rep(i,j,k) for(i=j;i<=k;++i)
#define dow(i,j,k) for(i=j;i>=k;--i)
#define pr pair
#define mkp make_pair
#define fi first
#define se second
void gen(int n,int m){
	int sx,sy,tx,ty;
	sx=rand()%n+1;sy=rand()%m+1;
	do{
		tx=rand()%n+1;ty=rand()%m+1;
	}while(mkp(sx,sy)==mkp(tx,ty));
	int i,j;
	printf("%d %d %d\n",n,m,rand()%50+1);
	rep(i,1,n){
		rep(j,1,m){
			if(mkp(i,j)==mkp(sx,sy)){
				printf("S");
			}else if(mkp(i,j)==mkp(ty,ty)){
				printf("E");
			}else{
				int k=rand()%100;
				if(k<=65)printf(".");
				else if(k<=85)printf("#");
				else printf("*");
			}
		}
		printf("\n");
	}
}
int main(){freopen("in.txt","w",stdout);
	srand((unsigned int)time(NULL));
	printf("10\n");
	int i;
	rep(i,1,3)gen(20,20);
	rep(i,3,6)gen(50,50);
	rep(i,6,10)gen(100,100);
}
