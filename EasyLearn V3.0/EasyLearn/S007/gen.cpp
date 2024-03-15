#include <bits/stdc++.h>
using namespace std;
#define rep(i,j,k) for(i=j;i<=k;++i)
#define dow(i,j,k) for(i=j;i>=k;--i)
#define pr pair
#define mkp make_pair
#define fi first
#define se second
const int N=2e5+10;
int p[N];
void gen(int n){
	int i;
	printf("%d\n",n);
	rep(i,1,n)p[i]=i;random_shuffle(p+1,p+1+n);
	rep(i,2,n)printf("%d %d\n",p[i],p[rand()%(i-1)+1]);
}
int main(){freopen("in.txt","w",stdout);

	srand((unsigned int)time(NULL));
	int T=10;printf("%d\n",T);
	gen(100);
	gen(100);
	gen(100);
	gen(100);
	gen(10000);
	gen(10000);
	gen(10000);
	gen(1000);
	gen(100000);
	gen(50000);
}
