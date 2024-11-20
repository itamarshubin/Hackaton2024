# Part 1 - Import the libraries, no need more libraries!

import pandas as pd
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# Part 2 - read the data
# The loc is dataframe contain the location of each row, the features contain more information about each row

df = pd.read_csv('data.csv')
loc, features = df[['x', 'y']].copy(), df[['yiddishkeit index', 'rich index']].copy()

# Part 3 (do it yourself) - Plot the features dataframe as scatter, can you see the anomalies?

# Part 4 (do it yourself) - train a kmean model and decide for each row - is it anomaly or not?

# Part 5 (do it yourself) - plot the location of all the anomalies as scatter

# I guess you can see the code now :)