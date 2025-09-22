import numpy as np
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

pro_model.load_weights('prediction_model/weights/pro_model_weights.h5')

# PIL Image input
def pro_predict(image):
    img = image.resize((250, 250)).convert('RGB')
    img_arr = np.array(img).astype('float32')
    img_arr = (img_arr / 255.0 - 0.5) / 0.5
    img_arr = np.expand_dims(img_arr, axis=0)
    prediction = pro_model.predict(img_arr)
    result = np.argmax(tf.nn.softmax(prediction[0]).numpy())
    if result == 0:
        return 'Fire'
    return 'No Fire'