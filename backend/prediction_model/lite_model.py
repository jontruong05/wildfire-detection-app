import tensorflow as tf
from tensorflow.keras.layers import Flatten, Dense
from tensorflow.keras.models import Sequential

lite_model = Sequential([
    Flatten(input_shape=(250, 250, 3)),
    Dense(128, activation='relu'),
    Dense(64, activation='relu'),
    Dense(2)
])

lite_model.load_weights('weights/lite_model_weights.h5')