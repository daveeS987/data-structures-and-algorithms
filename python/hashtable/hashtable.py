class HashTable:
    def __init__(self, size=1024):
        self.size = size
        self.buckets = [None] * self.size
