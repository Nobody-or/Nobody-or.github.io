      #include<bits/stdc++.h>
using namespace std;
int _,n,k,a[1<<20],x,y,A,f[100009][1009];
vector<int>p[1<<20],e[1<<20];
void D(int x,int r){
	for(int y:e[x])
		if(y^r){
			D(y,x);
			for(int i:p[a[x]]){
				int u=1e9;
				for(int j:p[a[y]])
					if(j*j%i==0)
						u=min(u,f[y][j]+(j%i!=0));
				f[x][i]=min((int)1e9,f[x][i]+u);
			}
		}
}
int main(){
	ios::sync_with_stdio(0);
	for(int i=1;i<=1e3;i++)
		for(int j=1;j<=1e3/i;j++)
			p[i*j].push_back(i);
	for(cin>>_;_--&&cin>>n>>k;){
		for(int i=1;i<=n;i++)
			cin>>a[i],e[i].clear();
		for(int i=1;i<=n;i++)
			for(int j=1;j<=1e3;j++)
				f[i][j]=0;
		for(int i=1;i<n;i++)
			cin>>x>>y,e[x].push_back(y),e[y].push_back(x);
		D(1,0),A=a[1];
		for(int i:p[a[1]])
			if(f[1][i]<k)
				A=max(A,a[1]*i);
		cout<<A<<'\n';
	}
}
