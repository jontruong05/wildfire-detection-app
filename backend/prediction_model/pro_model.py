import tensorflow as tf
from tensorflow.keras.layers import Flatten, Dense, Conv2D, MaxPooling2D
from tensorflow.keras.models import Sequential

pro_model = Sequential([
    Conv2D(32, kernel_size=7, padding='same', activation='relu', input_shape=(250, 250, 3)),
    MaxPooling2D(pool_size=2),
    Conv2D(64, kernel_size=7, padding='same', activation='relu'),
    MaxPooling2D(pool_size=2),
    Conv2D(128, kernel_size=7, padding='same', activation='relu'),
    MaxPooling2D(pool_size=2),
    Flatten(),
    Dense(2)
])

pro_model.load_weights('weights/lite_model_weights.h5')