import numpy as np
import matplotlib.pyplot as plt
import control as ct

# Define the system (e.g., a motor with transfer function 1/(s^2 + 2s + 1))
numerator = [1]
denominator = [1, 2, 1]
system = ct.TransferFunction(numerator, denominator)

# Define the PID controller
Kp, Ki, Kd = 1, 0.5, 0.2
controller = ct.TransferFunction([Kd, Kp, Ki], [1, 0])

# the closed-loop system
closed_loop = ct.feedback(controller * system, 1)

# Simulate the step response
time, response = ct.step_response(closed_loop)

# Plot the results
plt.plot(time, response)
plt.title('Step Response of a PID-Controlled System')
plt.xlabel('Time (s)')
plt.ylabel('Output')
plt.grid(True)
plt.show()


#%%%%%%%%
import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import freqs

# Define the filter parameters
R = 1e3  # Resistance (1 kOhm)
C = 1e-6  # Capacitance (1 µF)
cutoff_freq = 1 / (2 * np.pi * R * C)  # Cutoff frequency

# Define the transfer function H(s) = 1 / (RCs + 1)
numerator = [1]
denominator = [R * C, 1]

# Compute the frequency response
frequencies, response = freqs(numerator, denominator, worN=np.logspace(1, 6, 1000))

# Plot the frequency response
plt.semilogx(frequencies, 20 * np.log10(abs(response)))
plt.title('Frequency Response of a Low-Pass Filter')
plt.xlabel('Frequency (Hz)')
plt.ylabel('Gain (dB)')
plt.grid(True)
plt.show()

print(cutoff_freq)


#%%%%%%%%%
import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import lti, step

# Define the RC circuit parameters
R = 1e3  # Resistance (1 kOhm)
C = 1e-6  # Capacitance (1 µF)
tau = R * C  # Time constant

# Define the transfer function H(s) = 1 / (RCs + 1)
numerator = [1]
denominator = [R * C, 1]
system = lti(numerator, denominator)

# Simulate the step response
time, response = step(system)

# Plot the results
plt.plot(time, response)
plt.title('Step Response of an RC Circuit')
plt.xlabel('Time (s)')
plt.ylabel('Voltage (V)')
plt.grid(True)
plt.show()


#%%%%%%%%%%%%
