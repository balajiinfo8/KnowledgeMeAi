import io 
import os 
import pathlib
from functools import lru_cache 

from decouple import Config,RepositoryEnv

# define base dir 
Base_Dir = pathlib.Path(__file__).parent.parent

# define env path 
Env_Path = Base_Dir.parent / 'env'

@lru_cache
def get_config(use_gcloud=True):
    if Env_Path.exists():
        return Config(RepositoryEnv(Env_Path))
    from decouple import config  

    return config

Config = get_config()