from sklearn.datasets import fetch_california_housing
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df=fetch_california_housing(as_frame=True).frame
df.hist(bins=30,figsize=(20,15),color='skyblue',edgecolor='black')
plt.suptitle('Histograms of numerical features ',fontsize=20)
plt.show()

plt.figure(figsize=(20,15))
for i,col in enumerate(df.columns,1):
             plt.subplot(3,3,i)
             sns.boxplot(y=df[col],color='Lightgreen')
             plt.title(f'Box plot of {col}',fontsize=15)
plt.tight_layout()
plt.show()

