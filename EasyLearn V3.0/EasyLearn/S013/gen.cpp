#include <bits/stdc++.h>
using namespace std;
#define rep(i,j,k) for(i=j;i<=k;++i)
#define dow(i,j,k) for(i=j;i>=k;--i)
#define pr pair
#define mkp make_pair
#define fi first
#define se second
void gen(int n){
	printf("%d %d\n",n,rand()%n+1);int i;
	rep(i,1,n){
		int tmp=rand();
		if(rand()&1)tmp=-tmp;
		printf("%d ",tmp);
	}
	printf("\n");
}
int main(){freopen("in.txt","w",stdout);
	srand((unsigned int)time(NULL));
	int T=50;printf("%d\n",T);int i;
	rep(i,1,45)gen(10);
	gen(10000);
	gen(10000);
	gen(10000);
	gen(10000);
	gen(100000);
}
