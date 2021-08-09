"""
Update content of the Atlas - generate maps based on the netcdf data
Function        : Plot maps in a uniform way based on the netcdf files
Author          : Team BETA
First Built     : 2021.08.09
Last Update     : 2021.08.09
Library         : os, glob, netcdf4, matplotlib, cartopy, argparse
Description     : In this notebook serves to extract netcdf data and generate maps for Atlas page.
Return Values   : png files
Note            : All the maps are generated in a uniform way.
"""

import os
import argparse
import glob
from netCDF4 import Dataset
import matplotlib.pyplot as plt
import cartopy.crs as ccrs

def maps(datapath, output_path, map_type):
    """
    Generate maps in a uniform way based on the netcdf files.
    """
    # get the list of .nc files in the target directory
    nc_files = glob.glob(os.path.join(datapath,"*.nc"))
    print(nc_files)
    print(output_path)
    print(map_type)

def plot():
    """
    Create plots
    """

if __name__ == "__main__":
    # define command line arguments
    parser = argparse.ArgumentParser()
    parser.add_argument('-i', '--inputdir', required=True, type=str, default="./",
                        help="directory containing netCDF files [default current location]")
    parser.add_argument('-o', '--outputdir', required=True, type=str, default="./",
                        help="directory for output [default current location]")
    parser.add_argument('-t', '--typemap', required=True, type=str, default="prec",
                        help="type of plots, either precipitation(prec) or temperture (tas) [default 'prec']")
    # get arguments
    args = parser.parse_args()
    # call plot()
    maps(args.inputdir, args.outputdir, args.typemap)